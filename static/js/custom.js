/**
 * Function parsing an HTML "input" tag containing a memory
 * value
 *
 * A valid value is "[0-9]+('B' | 'k' | 'M' | 'G' | 'T')"
 * For instance:
 *  - 10B -> 10 bytes
 *  - 52k -> 52 kB
 *  - 8M  -> 8  MB
 */
function qaptiva_parse_mem(item) {
    const all_units = {'b': BigInt(0), 'k': BigInt(10), 'm': BigInt(20), 'g': BigInt(30), 't': BigInt(40)};

    const raw_value = item.value.toLowerCase().trim();
    const unit = raw_value.substr(-1, 1);
    const value_str = raw_value.substr(0, raw_value.length - 1).trim();
    const value = parseInt(value_str);

    if (!(unit in all_units) || !/^\d+$/.test(value_str) || isNaN(value)) {
        item.className = "qaptiva-error";
        return NaN;
    }

    item.className = "";
    return parseInt(BigInt(value) << all_units[unit]);
}
