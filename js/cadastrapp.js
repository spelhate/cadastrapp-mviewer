const cadastrapp = (function() {

    var _toggleForm = function (e) {
        var _form = document.getElementById("cadastrapp-form");
        if (_form.style.display === "none") {
            _form.style.display = "block";
        } else {
            _form.style.display = "none";
        }
    };

    return {

        init : function () {
            var _btn = document.createElement("button");
            _btn.id="cadastrapp-btn";
            _btn.className = "btn btn-default btn-raised";
            _btn.title = "Cadastrapp";
            let _span = document.createElement("span");
            _span.className = "far fa-sticky-note";
            _btn.appendChild(_span);
            _btn.addEventListener('click', _toggleForm);
            document.getElementById("toolstoolbar").appendChild(_btn);
        }
    };

})();

new CustomComponent("cadastrapp-mviewer", cadastrapp.init);