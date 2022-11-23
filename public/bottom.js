function main()
{
    const btn = document.querySelector('.menu-btn')
    if(btn)
    {
        btn.addEventListener('click', (event) => {
            event.preventDefault()
            
            const bm = document.querySelector('.hidden-bm')
            if(bm)
            {
                bm.setAttribute('class', 'hidden-bm show')

                btn.addEventListener('click', (event) => {
                    event.preventDefault()

                    bm.setAttribute('class', 'hidden-bm hide')
                    main()
                })
            }
        })
    }
}

main()