document.addEventListener('DOMContentLoaded', () => {
    if(document.innerWidth > 480){
        document.getElementById('menu').style.display = 'none';
        document.getElementById('close').style.display = 'none';
        document.getElementById('nav').style.display = 'block';
    }else {
        document.getElementById('menu').addEventListener('click', () => {
            document.getElementById('nav').style.display = 'block';
            document.getElementById('menu').style.display = 'none';

            document.getElementById('close').addEventListener('click', () => {
                document.getElementById('nav').style.display = 'none';
                document.getElementById('menu').style.display = 'block';

                if(document.innerWidth > 480){
                    document.getElementById('menu').style.display = 'none';
                    document.getElementById('close').style.display = 'none';
                    document.getElementById('nav').style.display = 'block';
                }
            });
        });
    }
});