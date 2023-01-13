.. _install:

Installing myQLM
================

.. toctree::
   :hidden:

   license

Please read the :ref:`Atos myQLM End-User Licence Agreement (Atos myQLM EULA) <license>`
carefully before using myQLM. You are only permitted to use myQLM pursuant to the terms
and conditions of this agreement. This agreement is between you and
(as an individual or legal entity) and Bull SAS.

By downloading of installing myQLM or otherwise rendering it available for your use,
you are agreeing to be bound by the terms of :ref:`this license <license>`. If you do
not agree with the terms, do not download, install, copy or otherwise use myQLM.
If you have downloaded or installed myQLM and do not agree to the terms, promptly delete myQLM.

Prerequisites
-------------

myQLM is installed using the *Package Installer for Python* (or pip). Please ensure pip command
is installed on your machine (if not, you can `download pip here <https://pip.pypa.io/en/stable/installation/>`_)
and that myQLM is installable on your computer (by looking at the compatibility matrix below)

.. _install-matrix:

Compatibility Matrix
********************

.. include:: compatibility_matrix.rst 


Install
-------

Install myQLM package
*********************
Please install myQLM by typing the following command in a Windows, :ref:`MacOS <macos>` or Linux prompt:

.. code-block::

    pip install myqlm

.. _install-magics:

.. dropdown:: myQLM with Jupyter
    :icon: repo

    myQLM comes with interactive tutorials (or notebooks). Your environment needs to be configured
    to use all advanced features provided by myQLM:

     - **Install Jupyter:** myQLM notebooks are designed to work with jupyter. You can install
       jupyter by typing the following command:

       .. code-block::

           pip install jupyter

     - **Install ImageMagick for wand:** myQLM uses *wand* library to display quantum circuits. Please follow
       `the wand installation guide <http://docs.wand-py.org/en/0.6.10/guide/install.html>`_ to install
       this python library


     - **Install myQLM magics:** myQLM provides a magic :code:`%qatdisplay` to display circuit inside a jupyter
       notebook. These magics can be installed using the following command:

       .. code-block::

           python -m qat.magics.install

    myQLM is now configured for jupyter. Please download :ref:`myQLM notebooks here <myqlm-notebooks>`
    and start the notebook :code:`overview.ipynb`, this notebook contains a table of
    content of all our tutorials.

.. _install-interop:

Interoperability
****************

.. warning::

    Interoperability packages are deprecated for Python versions 3.6 and 3.7

This package enables access to other quantum programming environments such as
Qiskit, ProjectQ, PyQuil, Cirq ...
This package will not automatically install dependency packages because someone who
want to interface with Qiskit may not want to interface with Cirq... The desired
quantum environment can be cherry-picked using the pip command:

.. tab-set::

    .. tab-item:: Qiskit

        .. code-block::

            pip install myqlm-interop[qiskit_binder]

    .. tab-item:: ProjectQ

        .. code-block::

            pip install myqlm-interop[projectq_binder]

    .. tab-item:: Cirq

        .. code-block::

            pip install myqlm-interop[cirq_binder]

    .. tab-item:: PyQuil

        .. code-block::

            pip install myqlm-interop[pyquil_binder]

    .. tab-item:: All frameworks

        .. warning::

            Dependencies of these frameworks could conflict. Installing myQLM-interop for all these framework
            can fail

        .. code-block::

            pip install myqlm-interop[all]
