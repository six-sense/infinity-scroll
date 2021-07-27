import React,{useEffect, useState} from 'react';
import Box from './Box';


function InfinityScroll(){
    const [page, setPage] = useState(0)
    const [array, setArray] = useState([
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        },
        {
            "postId": 2,
            "id": 6,
            "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
            "email": "Presley.Mueller@myrl.com",
            "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
        },
        {
            "postId": 2,
            "id": 7,
            "name": "repellat consequatur praesentium vel minus molestias voluptatum",
            "email": "Dallas@ole.me",
            "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
        },
        {
            "postId": 2,
            "id": 8,
            "name": "et omnis dolorem",
            "email": "Mallory_Kunze@marie.org",
            "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
        },
        {
            "postId": 2,
            "id": 9,
            "name": "provident id voluptas",
            "email": "Meghan_Littel@rene.us",
            "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
        },
        {
            "postId": 2,
            "id": 10,
            "name": "eaque et deleniti atque tenetur ut quo ut",
            "email": "Carmen_Keeling@caroline.name",
            "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
        },
        {
            "postId": 41,
            "id": 201,
            "name": "et adipisci aliquam a aperiam ut soluta",
            "email": "Cleve@royal.us",
            "body": "est officiis placeat\nid et iusto ut fugit numquam\neos aut voluptas ad quia tempore qui quibusdam doloremque\nrecusandae tempora qui"
        },
        {
            "postId": 41,
            "id": 202,
            "name": "blanditiis vel fuga odio qui",
            "email": "Donnell@polly.net",
            "body": "sequi expedita quibusdam enim ipsam\nbeatae ad eum placeat\nperspiciatis quis in nulla porro voluptas quia\nesse et quibusdam"
        },
        {
            "postId": 41,
            "id": 203,
            "name": "ab enim adipisci laudantium impedit qui sed",
            "email": "Bonita@karl.biz",
            "body": "eum voluptates id autem sequi qui omnis commodi\nveniam et laudantium aut\net molestias esse asperiores et quaerat\npariatur non officia voluptatibus"
        },
        {
            "postId": 41,
            "id": 204,
            "name": "autem voluptates voluptas nihil",
            "email": "Shea@angelina.biz",
            "body": "voluptatibus pariatur illo\nautem quia aut ullam laudantium quod laborum officia\ndicta sit consequatur quis delectus vel\nomnis laboriosam laborum vero ipsa voluptas"
        },
        {
            "postId": 41,
            "id": 205,
            "name": "et reiciendis ullam quae",
            "email": "Omari@veronica.us",
            "body": "voluptatem accusamus delectus natus quasi aliquid\nporro ab id ea aut consequatur dignissimos quod et\naspernatur sapiente cum corrupti\npariatur veritatis unde"
        },
        {
            "postId": 42,
            "id": 206,
            "name": "deserunt eveniet quam vitae velit",
            "email": "Sophie@antoinette.ca",
            "body": "nam iusto minus expedita numquam\net id quis\nvoluptatibus minima porro facilis dolores beatae aut sit\naut quia suscipit"
        },
        {
            "postId": 42,
            "id": 207,
            "name": "asperiores sed voluptate est",
            "email": "Jessika@crystel.ca",
            "body": "nulla quos harum commodi\naperiam qui et dignissimos\nreiciendis ut quia est corrupti itaque\nlaboriosam debitis suscipit"
        },
        {
            "postId": 42,
            "id": 208,
            "name": "excepturi aut libero incidunt doloremque at",
            "email": "Cesar_Volkman@letitia.biz",
            "body": "enim aut doloremque mollitia provident molestiae omnis esse excepturi\nofficiis tempora sequi molestiae veniam voluptatem\nrecusandae omnis temporibus et deleniti laborum sed ipsa\nmolestiae eum aut"
        },
        {
            "postId": 42,
            "id": 209,
            "name": "repudiandae consectetur dolore",
            "email": "Maureen_Mueller@lance.us",
            "body": "officiis qui eos voluptas laborum error\nsunt repellat quis nisi unde velit\ndelectus eum molestias tempora quia ut aut\nconsequatur cupiditate quis sint in eum voluptates"
        },
        {
            "postId": 42,
            "id": 210,
            "name": "quibusdam provident accusamus id aut totam eligendi",
            "email": "Eriberto@geovany.ca",
            "body": "praesentium odit quos et tempora eum voluptatem non\nnon aut eaque consectetur reprehenderit in qui eos nam\nnemo ea eos\nea nesciunt consequatur et"
        },
        {
            "postId": 43,
            "id": 211,
            "name": "rerum voluptate dolor",
            "email": "Faustino.Keeling@morris.co.uk",
            "body": "odio temporibus est ut a\naut commodi minima tempora eum\net fuga omnis alias deleniti facere totam unde\nimpedit voluptas et possimus consequatur necessitatibus qui velit"
        },
        {
            "postId": 43,
            "id": 212,
            "name": "et maiores sed temporibus cumque voluptatem sunt necessitatibus in",
            "email": "Viola@aric.co.uk",
            "body": "aut vero sint ut et voluptate\nsunt quod velit impedit quia\ncupiditate dicta magni ut\neos blanditiis assumenda pariatur nemo est tempore velit"
        },
        {
            "postId": 43,
            "id": 213,
            "name": "ratione architecto in est voluptatem quibusdam et",
            "email": "Felton_Huel@terrell.biz",
            "body": "at non dolore molestiae\nautem rerum id\ncum facilis sit necessitatibus accusamus quia officiis\nsint ea sit natus rerum est nemo perspiciatis ea"
        },
        {
            "postId": 43,
            "id": 214,
            "name": "dicta deserunt tempore",
            "email": "Ferne_Bogan@angus.info",
            "body": "nam nesciunt earum sequi dolorum\net fuga sint quae architecto\nin et et ipsam veniam ad voluptas rerum animi\nillum temporibus enim rerum est"
        },
        {
            "postId": 43,
            "id": 215,
            "name": "sint culpa cupiditate ut sit quas qui voluptas qui",
            "email": "Amy@reymundo.org",
            "body": "esse ab est deleniti dicta non\ninventore veritatis cupiditate\neligendi sequi excepturi assumenda a harum sint aut eaque\nrerum molestias id excepturi quidem aut"
        },
        {
            "postId": 44,
            "id": 216,
            "name": "voluptatem esse sint alias",
            "email": "Jaylan.Mayert@norbert.biz",
            "body": "minima quaerat voluptatibus iusto earum\nquia nihil et\nminus deleniti aspernatur voluptatibus tempore sit molestias\narchitecto velit id debitis"
        },
        {
            "postId": 44,
            "id": 217,
            "name": "eos velit velit esse autem minima voluptas",
            "email": "Cristina.DAmore@destini.biz",
            "body": "aperiam rerum aut provident cupiditate laboriosam\nenim placeat aut explicabo\nvoluptatum similique rerum eaque eligendi\nnobis occaecati perspiciatis sint ullam"
        },
        {
            "postId": 44,
            "id": 218,
            "name": "voluptatem qui deserunt dolorum in voluptates similique et qui",
            "email": "Ettie_Bashirian@lambert.biz",
            "body": "rem qui est\nfacilis qui voluptatem quis est veniam quam aspernatur dicta\ndolore id sapiente saepe consequatur\nenim qui impedit culpa ex qui voluptas dolor"
        },
        {
            "postId": 44,
            "id": 219,
            "name": "qui unde recusandae omnis ut explicabo neque magni veniam",
            "email": "Lizeth@kellen.org",
            "body": "est et dolores voluptas aut molestiae nam eos saepe\nexpedita eum ea tempore sit iure eveniet\niusto enim quos quo\nrepellendus laudantium eum fugiat aut et"
        },
        {
            "postId": 44,
            "id": 220,
            "name": "vel autem quia in modi velit",
            "email": "Vladimir_Schumm@sharon.tv",
            "body": "illum ea eum quia\ndoloremque modi ducimus voluptatum eaque aperiam accusamus eos quia\nsed rerum aperiam sunt quo\nea veritatis natus eos deserunt voluptas ea voluptate"
        }
    ])

    const handleScroll = () =>{
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        // console.log(scrollHeight, scrollTop,clientHeight)
        if(scrollTop + clientHeight >= scrollHeight){
            // API Fetch
            console.log('test')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {window.removeEventListener('scroll', handleScroll)
    }})

    return (
        <>
        {array.map((item,key)=>
            (
             <Box id={item.id} email={item.email} body={item.body}/>
            )
        )}
        </>
        
    )
}

export default InfinityScroll;