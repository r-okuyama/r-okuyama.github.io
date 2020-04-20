'use strict'

{
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');



        menuItems.forEach(clickedItem => { //要素が押された時の処理
            clickedItem.addEventListener('click', e =>{
                e.preventDefault();　//ページ遷移させない処理

                menuItems.forEach(item =>{　//選ばれなかった要素はactiveを外す
                    item.classList.remove('active');
                });
                clickedItem.classList.add('active');

                contents.forEach(content =>{ //選ばれなかったcontentからactiveを外す
                    content.classList.remove('active');
                });

                document.getElementById(clickedItem.dataset.id).classList.add('active');
            });

        });
}