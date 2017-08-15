var Myconst;
(function (Myconst) {
    Myconst[Myconst["pi"] = 3.14] = "pi";
    Myconst[Myconst["e"] = 2.73] = "e";
})(Myconst || (Myconst = {}));
alert(Myconst.pi);
