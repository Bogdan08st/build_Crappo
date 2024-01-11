const Action = [{
    action: "75% SAVE",
    description: "For the Black Friday weekend",
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