
export  const getTab=(boll)=> {
    let tab = boll?[
        {
            place:"email",
            type:"text",
            value:""
        },
        {
            place:"pass",
            type:"password",
            value:""
        }
    ]:[
        {
            place:"nom",
            type:"text",
            value:""
        },
        {
            place:"prenom",
            type:"text",
            value:""
        },
        {
            place:"email",
            type:"text",
            value:""
        },
        {
            place:"pass",
            type:"text",
            value:""
        }];
        return tab;
    }

export const getContactTab=[    {
    place:"nom",
    type:"text",
    value:""
},
{
    place:"prenom",
    type:"text",
    value:""
},
{
    place:"numéro de tel",
    type:"text",
    value:""
}
];