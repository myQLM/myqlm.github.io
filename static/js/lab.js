/**
 * @authors     Arnaud GAZDA <arnaud.gazda@atos.net>
 * @copyright   2022 Bull S.A.S. - All rights reserved
 *              This is not Free or Open Source software.
 *              Please contact Bull SAS for details about its license.
 *              Bull - Rue Jean Jaurès - B.P. 68 - 78340 Les Clayes-sous-Bois
 *
 * Description:
 * File providing a function to open a file (likely a notebook) into a new
 * jupyter lab tab.
 * Qaptiva JupyterLab plugin is required
 */

// Function used to open a notebook in a new Jupyter lab tab
function open_jupyterlab_tab(pathname) {
    // Print log message
    console.log("Open a new file: " + pathname);

    // If current page is in IFrame (i.e. served by Jupyter)
    if (window !== window.parent) {
        /*
        if (pathname.slice(0,10) == "notebooks/") {
                pathname=pathname.slice(10)
                console.log("Final pathname: " + pathname);
        }
        */
        // Send message to parent scope
        window.parent.postMessage({"pathname": pathname}, document.location.origin);
    }

    // If not in IFrame (i.e. served by NGINX)
    // Change location if pathname points to a notebook
    else if (pathname.endsWith(".ipynb")) {
        document.location.replace("/notebooks/" + encodeURI(pathname));
    }

    else {
        console.log("Could not open a non-notebook file");
    }
}


// Set JupyterLab links
addEventListener("DOMContentLoaded", (event) => {
    // Get all notebook cards
    let notebook_cards = document.getElementsByClassName("qlm-notebook");

    for (let card of notebook_cards) {
        // Get notebook path
        let link_tag = card.getElementsByTagName("a")[0]
        let notebook_path = link_tag.getAttribute("href");

        // Edit HTML tag
        link_tag.removeAttribute("href");
        link_tag.setAttribute("onclick", "open_jupyterlab_tab(\"" + notebook_path + "\")");
    }
});
