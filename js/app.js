let my_city= {
    name: `grannde prairie`,
    population: 64000,
    is_Capital: false,
    communities: [
        {
        name: `red`,
        location: `north`,
        population:4000,
        
    },{
        name: `balck`,
        location: `east`,
        population:10000,

        
        },
        {
        name: `green`,
        location: `weast`,
        population:10000,

        
        },
        {
        name: `blue`,
        location: `south`,
        population:20000,

        
        },
        {
        name: `white`,
        location: `middel`,
        population:20000,

        
        }
    ]
}

let counter = 0;
let total =0
while ( counter < my_city[`communities`].length )
{
    if ( my_city[`communities`][counter][`population`] >= 4000 )
    {
        console.log( `my community: ${ my_city[`communities`][counter][`name`] }` )
        total = total + my_city[`communities`][counter][`population`]
        console.log( total )
        if ( my_city[`population`] === total )
        {
            console.log(`The math checks out`)
        } else
        {
            console.log( `We must be missing some people`)
        }
    }
   
    counter = counter + 1;
 
}

if ( my_city[`is_Capital`] === true )
{
    console.log(` City: ${my_city[`name`]} population:${my_city[`population`]}  `)
} else
{
    console.log(`not important enough`)
}


let usernames = [ `bobo`,`ronald`,`rose`,`albet_winer`]
counter=0
while ( counter < usernames.length )
{
    console.log( `${ usernames[counter].toUpperCase() }` )
    counter++
}