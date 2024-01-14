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
    const StatisticsCompany = document.querySelector('.statistics-company')
}

document.querySelector('.statistics-company') ? InstallStatisticCompany() : null;

