// Хапаємо наші елементи

    // Хапаємо перше поле (input), якому ми приліпили клас '.pershePole'
        let persheChyslo = document.querySelector('.drygehePole')
    
    // Хапаємо перше поле (input), якому ми приліпили клас '.drygehePole'
        let drygeChyslo = document.querySelector('.drygehePole')




// Додаємо до нашої кнопки очікування події "клік"
    // У нас в документі лише один тег button, тому ми посилаємося не на приліплений клас (як робили це вище з інпутами), а посилаємося на єдиний у тому документі тег button

    // Як тільки воно дочекається (подія відбудеться), воно виконає функцію "myFunction"
    
        document.querySelector('button').addEventListener('click', myFunction)

        // myFunction потрібно оголосити до того, як програма спробує її виконати. Інакше програма відразу скаже, упс, от ти щойно сказав 'myFunction', я подивився вище, але ти до цього не пояснив мені що воно, тому я зараз не можу його виконати.

