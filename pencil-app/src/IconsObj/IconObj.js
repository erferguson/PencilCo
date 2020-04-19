import React

const icons = [
    {
        icon:<ion-icon name="pencil-outline"></ion-icon>,
        title: 'Pencils',
        description: 'Lead or Graphite'
    },
    {
        icon:<ion-icon name="paper-plane-outline"></ion-icon>,
        title: 'Paper',
        description: 'Made from Bamboo'
    },
    {
        icon:<ion-icon name="cut-outline"></ion-icon>,
        title: 'Scissors',
        description: 'Stainless Steel'
    },
    {
        icon:<ion-icon name="mail-outline"></ion-icon>,
        title: 'Envelopes',
        description: 'All Sizes'
    }
]

function IconObj (props){
    return (
        <div>
            <span>
                {props.icon}
            </span>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}