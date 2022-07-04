export const transcationSchema = {
    name:'transcations',
    title: 'Transcations',
    type: 'document',
    fields: [
        {
            name: 'txHaash',
            title: 'Transcation Hash',
            type: 'string',
        },
        {
            name: 'fromAddress',
            title: 'From (Wallet Address',
            type: 'string',
        },
        {
            name: 'toAddress',
            title: 'To (Wallet Address',
            type: 'string',
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number',
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
        },
]
}