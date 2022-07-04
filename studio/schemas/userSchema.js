export const userSchema ={
    name: 'users',
    title: 'Users',
    type: 'document',
    fields: [
        {
            name: 'address',
            title: 'Wallet Address',
            type: 'string',
        },
        {
            name: 'username',
            title: 'User Name',
            type: 'string',
        },
        {
            name: 'transcations',
            title: 'Transcations',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [ { type: 'transcations'}],
                }
            ]
        }
    ]
}