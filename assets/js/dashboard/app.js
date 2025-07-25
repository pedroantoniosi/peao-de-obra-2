if (window.matchMedia('(max-width: 768px)').matches) {

    const body = document.body;

    function disableBodyScroll() {
        body.style.overflow = 'hidden';
        body.style.touchAction = 'none';
    }

    function enableBodyScroll() {
        body.style.overflow = '';
        body.style.touchAction = '';
    }

    document.getElementById('order-selector').onclick = () => {
        document.getElementById('select-list').style.display = "flex";
        disableBodyScroll();
    };

    document.getElementById('filter-selector').onclick = () => {
        document.getElementById('user-filter').style.display = "flex";
        disableBodyScroll();
    };

    document.getElementById('select-list').addEventListener('click', function (event) {
        const caption = this.querySelector('.caption');
        if (!caption.contains(event.target)) {
            this.style.display = 'none';
            enableBodyScroll();
        }
    });

    document.getElementById('btnCloseSelect').onclick = () => {
        document.getElementById('select-list').style.display = "none";
        enableBodyScroll();
    };

    document.getElementById('btn-close-filter').onclick = () => {
        document.getElementById('user-filter').style.display = "none";
        enableBodyScroll();
    };

    document.getElementById('sortPriceLowest').addEventListener('click', () => {
        document.getElementById('select-list').style.display = "none";
        enableBodyScroll(); // ✅ libera scroll após clique
    });

    document.getElementById('sortPricehigher').addEventListener('click', () => {
        document.getElementById('select-list').style.display = "none";
        enableBodyScroll(); // ✅ libera scroll após clique
    });

    document.getElementById('resize-selector').onclick = () => {
        document.querySelectorAll("#user-dashboard .card").forEach((el) => {
            el.classList.toggle('active');
        });
    };
}
