const Action = [{
    action: "75% SAVE",
    description: "For the Black Friday weekend",
},]
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
    statImg: "assets/img/choice-earth_icon.svg",
},]

const InstallEventAction = function(){
    const pageAction = document.querySelector('.page-action')
    const RenderAction = (info)=>{
        let list = info.map((element) =>{
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

const InstallStatisticCompany = () =>{
    const StatisticsCompany = document.querySelector('.statistics-company')
    const infoStatistics = document.querySelectorAll('.info-statistics')

    infoStatistics.forEach((item) =>{
        const infoStatisticsId = item.getAttribute('id')
        const imgContainer = item.querySelector('.img-container img')
            const imgContainerSrc = imgContainer.getAttribute('src')
        const statisticTitle = item.querySelector('.statistic-title')
        const statisticSubtitle = item.querySelector('.statistic-subtitle')
        
// Функция для фильтрации массива по идентификаторам
        function filterMassifById(containerId) {
            return SiteStatistics.filter(item => item.id === containerId);
        }
        const filterResult = filterMassifById(infoStatisticsId);
// Вставка данных в контейнеры
        function insertFilterInContainer(selector, img, title, subtitle, filter) {
            if (selector && filter) {
                img.setAttribute('src', filter.statImg);
                title.innerHTML = filter.statTitle;
                subtitle.innerHTML = filter.statSubtitle;
                console.log(imgContainer)
                console.log(statisticTitle)
                console.log(statisticSubtitle)
            }
        }

        insertFilterInContainer(filterMassifById(), imgContainer, statisticTitle, statisticSubtitle, filterResult)
    })
}

document.querySelector('.statistics-company') ? InstallStatisticCompany() : null;

