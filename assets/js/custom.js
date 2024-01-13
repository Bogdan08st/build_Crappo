const Action = [{
    action: "75% SAVE",
    description: "For the Black Friday weekend",
},]
const SiteStatistics = [{
    id: 1,
    statTitle: "$30B",
    statSubtitle: "Digital Currency Exchanged",
},
{
    id: 2,
    statTitle: "10M+",
    statSubtitle: "Trusted Wallets Investor",
},
{
    id: 3,
    statTitle: 195,
    statSubtitle: "Countries Supported",
},];

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
    const StatisticsCompany = document.querySelectorAll('.statistics-company')
    const RenderSiteStatistics = (info)=>{
        let list = info.map((element) =>{
            return `
                <div id="1" class="row info-statistics_container">
                    <div class="col-4 info-statistics">
                        <div class="row">
                            <div class="img-container">
                                <img src="assets/img/choice-statistics_icon.svg" alt="icon">
                            </div>
                            <div class="col col-content">
                                <div class="statistic-title">${element.statTitle}</div>
                                <div class="statistic-subtitle">${element.subTitle}</div>
                            </div>
                        </div>
                    </div>
                    <div id="2" class="col-4 info-statistics">
                        <div class="row">
                            <div class="img-container">
                                <img src="assets/img/choice-person_icon.svg" alt="icon">
                            </div>
                            <div class="col col-content">
                                <div class="statistic-title">10M+</div>
                                <div class="statistic-subtitle">Trusted Wallets Investor</div>
                            </div>
                        </div>
                    </div>
                    <div id="3" class="col-4 info-statistics">
                        <div class="row">
                            <div class="img-container">
                                <img src="assets/img/choice-earth_icon.svg" alt="icon">
                            </div>
                            <div class="col col-content">
                                <div class="statistic-title">195</div>
                                <div class="statistic-subtitle">Countries Supported</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        StatisticsCompany.innerHTML = list;
    }
    RenderSiteStatistics(SiteStatistics);
}

document.querySelector('.statistics-company') ? InstallStatisticCompany() : null;

