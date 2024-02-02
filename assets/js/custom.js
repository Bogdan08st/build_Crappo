const Action = [{
    action: "75% SAVE",
    description: "For the Black Friday weekend",
}, ];
const SiteStatistics = [{
        id: 1,
        statTitle: "$30B",
        statSubtitle: "Digital Currency Exchanged",
        statImg: "assets/img/choice-statistics_icon.svg",
    },
    {
        id: 2,
        statTitle: "10M+",
        statSubtitle: "Trusted Wallets Investor",
        statImg: "assets/img/choice-person_icon.svg",
    },
    {
        id: 3,
        statTitle: 195,
        statSubtitle: "Countries Supported",
        statImg: 'assets/img/choice-earth_icon.svg',
    },
];

$(document).ready(function(){
    var slider = $('.cryptocurrencies .row')
    var settings = {
        mobileFirst: false,
        variableWidth: true,
        arrows: false,
        centerPadding: '45px',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
            settings: "unslick",
            },
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    mobileFirst: true,
                }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
            }
        ]
    }
    slider.slick(settings);
})






const InstallEventAction = function() {
    const pageAction = document.querySelector('.page-action')
    const RenderAction = (info) => {
        let list = info.map((element) => {
            return `
                <div class="base">
                    <div class="saving">${element.action}</div>
                    <div class="time-saving">${element.description}</div>
                </div>
            `;
        })
        pageAction.innerHTML = list;
    }
    RenderAction(Action);
}
document.querySelector('.page-action') ? InstallEventAction() : null;

const InstallStatisticCompany = () => {
    const infoStatistics = document.querySelectorAll('.info-statistics')

    infoStatistics.forEach((item) => {
        const infoStatisticsId = parseInt(item.getAttribute('id'))
        const imgContainer = item.querySelector('.img-container img')
        const statisticTitle = item.querySelector('.statistic-title')
        const statisticSubtitle = item.querySelector('.statistic-subtitle')


        // Вставка данных в контейнеры
        function insertFilterInContainer(img, title, subtitle, filter) {
            const foundItem = filter.find(item => item.id === infoStatisticsId);
            if (item) {
                img.setAttribute('src', foundItem.statImg);
                title.innerHTML = foundItem.statTitle;
                subtitle.innerHTML = foundItem.statSubtitle;
                //console.log(SiteStatistics[0].statTitle)
            }
        };

        insertFilterInContainer(imgContainer, statisticTitle, statisticSubtitle, SiteStatistics);
    })
}

document.querySelector('.statistics-company') ? InstallStatisticCompany() : null;


const InstallCardClassLogic = ()=>{
    const cryptocurrencies = document.querySelector('.cryptocurrencies')
    const cards = cryptocurrencies.querySelectorAll('.card')


    const removeClass = (selector, className) => selector.forEach(item => item.classList.remove(className));
    const addClass = (selector, className) => selector.classList.add(className);
    cards.forEach((item) => {
        // const cardbtnText = cardBtn.textContent;
        // console.log(cardbtnText)
        item.addEventListener('click', (event) => {
            const thisCard = event.currentTarget;

            if (item.contains(thisCard) || item === thisCard) {
                // Если да, это элемент карты
                //console.log(item);
                removeClass(cards, 'active');
                addClass(item, 'active');
            }

            cards.forEach((card) => {
                const cardBtn = card.querySelector('.card-btn p');
                const HrefdBtn = card.querySelector('.card-btn')
                if (card.classList.contains('active')) {
                    cardBtn.textContent = 'Start mining';
                    setTimeout(function(){
                        HrefdBtn.setAttribute('href', "#")
                    }, 1000);
                } else {
                    cardBtn.textContent = null;
                    HrefdBtn.removeAttribute('href', "#")
                }
            });
        });
    });
}

document.querySelector('.cryptocurrencies') ? InstallCardClassLogic() : null;


const InstallCalculate = function(){
    const calculate = document.querySelectorAll('.calculate')
    calculate.forEach((item)=>{
        const userRate = item.querySelector('#user-rate');
        const userChoice = item.querySelector('#user-choice-calcul');
        const finalRevenue = item.querySelector('#calcul-ravenue');
        const btnCalcul = item.querySelector('.btn')

        $('select').niceSelect();

        btnCalcul.addEventListener('click', ()=>{
            const choiceSelected = userChoice.querySelector('.list .selected')
            const choiceValue = choiceSelected.getValue;
            console.log(choiceValue);
            
            const calcul = () =>{
                console.log('kaka')
                
            }
            calcul();
        })


    })
};
document.querySelector('.calculate') ? InstallCalculate() : null;