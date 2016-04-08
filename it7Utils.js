;(function(){
    var it7Utils = function(){};

    it7Utils.version = '1.0.0';

    /**
     *
     * @param money
     * @param [c] к-во знаков после запятой
     * @param [d] разделитель десятых 10.00
     * @param [t] разделитель тысяч 1'000
     * @returns {string}
     */
    it7Utils.formatMoney = function (money, c, d, t) {
        var n = parseFloat(money);
        isNaN(n) && (n = 0);
        var c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "\'" : t,
            s = n < 0 ? "-" : "",
            n2 = Math.abs(+n || 0).toFixed(c),
            i = parseInt(n2),
            is = parseInt(n2).toString(),
            il = i.toString().length,
            j = il > 3 ? il % 3 : 0;
        var o = s;
        o += (j ? is.substr(0, j) + t : "");
        o += is.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
        o += (c ? d + n.toFixed(c).slice(0-c) : "");
        return o;
    };

    window.it7Utils = it7Utils;
})();