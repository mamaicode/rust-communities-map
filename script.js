const communities = [
    {
        name: "Rust Brisbane",
        description: "We're interested in the Rust programming language. We aim to catch up monthly to discuss learning and using Rust, and to share news and discoveries from the Rust ecosystem. All are welcome, whether you're using Rust every day or just interested to check out something new!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-brisbane/",
        coordinates: [153.0251, -27.4698],
        country: "Australia",
        continent: "Oceania"
    },
    {
        name: "Rust Melbourne",
        description: "This is a group for anyone interesting in the programming language Rust, whether they are just curious or using Rust day-to-day. All skill levels welcome!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-melbourne/",
        coordinates: [144.9631, -37.8136],
        country: "Australia",
        continent: "Oceania"
    },
    {
        name: "Rust Sydney",
        description: "We're Rust users of all skill levels in Sydney.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-sydney",
        coordinates: [151.2093, -33.8688],
        country: "Australia",
        continent: "Oceania"
    },
    {
        name: "Belgium Rust User Group",
        description: "Rust user group. This meetup will speak about Rust, the programming language. From simple to advanced usage.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/belgium-rust-user-group/",
        coordinates: [4.3517, 50.8503],
        country: "Belgium",
        continent: "Europe"
    },
    {
        name: "Rust in POA",
        description: "Porto Alegre Rust community.",
        image: "https://via.placeholder.com/150",
        link: "https://rust-in-poa.github.io/",
        coordinates: [-51.2177, -30.0346],
        country: "Brazil",
        continent: "South America"
    },
    {
        name: "Rust Rio",
        description: "O grupo do Rust Rio tem como objetivo compartilhar conhecimento entre a comunidade, desde pessoas experientes aos mais novos, que estejam afim de aprender, conhecer e/ou são hobbistas da linguagem.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-rio/",
        coordinates: [-43.1729, -22.9068],
        country: "Brazil",
        continent: "South America"
    },
    {
        name: "Rust São Paulo",
        description: "Vamos compartilhar informações sobre Rust! Casos de uso, features, dicas, sugestões, formas para contribuir, etc.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-sao-paulo-meetup/",
        coordinates: [-46.6333, -23.5505],
        country: "Brazil",
        continent: "South America"
    },
    {
        name: "Rust Montréal",
        description: "This group is to gather Rust language enthusiasts in Montréal to come together, share tips and talk about what's going on in the ecosystem. Whether you're Rust-curious, or professionally write Rust, or somewhere in between, come by!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-montreal/",
        coordinates: [-73.5673, 45.5017],
        country: "Canada",
        continent: "North America"
    },
    {
        name: "Ottawa Rust Language Meetup",
        description: "We are interested in the powerful and safe language Rust. We will occasionally meet to share knowledge and ideas, discuss and learn Rust, and contribute to projects. People of all skill level are welcome, even if you are just curious about the language!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/meetup-group-bdcioynp/",
        coordinates: [-75.6972, 45.4215],
        country: "Canada",
        continent: "North America"
    },
    {
        name: "Rust Toronto",
        description: "We are the Toronto Rust developer community. Connect with and learn from fellow Rustaceans of all skill and experience levels. We are trying to run regular meetups every 1-2 months.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-toronto/",
        coordinates: [-79.3832, 43.6532],
        country: "Canada",
        continent: "North America"
    },
    {
        name: "Vancouver Rust",
        description: "The Vancouver Rust Meetup group is a group of programmers who are currently or interested in using Rust for personal or professional projects.We meet once a month for studying or talking about the language and its ecosystem. We do our best to start every meetup with a presentation on a specific topic that usually motivates passionate conversations.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/vancouver-rust/",
        coordinates: [-123.1216, 49.2827],
        country: "Canada",
        continent: "North America"
    },
    {
        name: "Rust Prague",
        description: "Prague meetup for people interested in Rust, a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety :)",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-prague/",
        coordinates: [14.4378, 50.0755],
        country: "Czech Republic",
        continent: "Europe"
    },
    {
        name: "Copenhagen Rust Community",
        description: "A place for aspiring and experienced Rust enthusiasts to come together to discover and discuss the latest Rust developments, showcase Rust projects and crates, network and meet each other in a supportive community.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/copenhagen-rust-community/",
        coordinates: [12.5683, 55.6761],
        country: "Denmark",
        continent: "Europe"
    },
    {
        name: "Rust Lille",
        description: "Rust Lille est un groupe de développeurs et développeuses ayant pour but d'animer la communauté Rust autour de Lille.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/meetup-group-zgphbyet/",
        coordinates: [3.0573, 50.6292],
        country: "France",
        continent: "Europe"
    },
    {
        name: "Rust Lyon",
        description: "Ce meetup Rust Lyon a pour objectif de réunir des enthousiastes qui utilisent ou sont intéressé.e.s par le langage de programmation Rust, à Lyon et ses alentours.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-lyon/",
        coordinates: [4.8357, 45.7640],
        country: "France",
        continent: "Europe"
    },    
    {
        name: "Rust Paris",
        description: "Le groupe de meetup Rust parisien. Les crustacé.e.s de tout niveau sont les bienvenus, ou juste si vous êtes curieu.ses.x à propos du langage. ",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Paris/",
        coordinates: [2.3522, 48.8566],
        country: "France",
        continent: "Europe"
    },
    {
        name: "Montpellier Rust Meetup",
        description: "Venez découvrir et échanger sur le langage de programmation Rust ! Les 'Rustaceans' de tous niveaux sont les bienvenus, que vous soyez déjà pratiquant ou simplement curieux. ",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/montpellier-rust-meetup/",
        coordinates: [3.8767, 43.6117],
        country: "France",
        continent: "Europe"
    },
    {
        name: "Finland Rust-lang Group",
        description: "We're a group of programmers around Finland enthusiastic about Rust, the blazingly fast and safe systems programming language developed by Mozilla. We have organized events in Helsinki and Tampere.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/finland-rust-meetup/",
        coordinates: [24.9410, 60.1695],
        country: "Finland",
        continent: "Europe"
    },
    {
        name: "Rust Cologne",
        description: "We are interested in the emerging systems programming language Rust, from Mozilla. Rustaceans of all skill levels are welcome, even if you are just interested in the language. We want to get together to learn Rust and work on Rust projects of all kinds.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rustcologne/",
        coordinates: [6.9603, 50.9375],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust Berlin",
        description: "We are interested in the emerging systems language Rust, from Mozilla. Rusties of all skill levels are welcome, or even if you are just interested in the language. We want to get together to learn Rust and work on Rust projects of all kinds.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-berlin/",
        coordinates: [13.4050, 52.5200],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust Hack and Learn Karlsruhe",
        description: "Diese Treffen richten sich an alle, die Interesse an der Programmiersprache Rust haben. Bei uns ist jede(r) willkommen, von Interessierten und Neugierigen, über Programmieranfänger bis hin zu den absoluten Rust-Profis",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-hack-learn-karlsruhe/",
        coordinates: [8.4037, 49.0069],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust Meetup Hamburg",
        description: "Dieses Treffen ist fuer alle, die Interesse an der Programmiersprache Rust haben. Jede(r) ist hier willkommen, von vage Interessierten, über Anfänger, Fortgeschrittene bis hin zu den ganz Sattelfesten.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-meetup-hamburg/",
        coordinates: [9.9937, 53.5511],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust - Modern Systems Programming Leipzig",
        description: "Rust lernen, analysieren, verbessern, diskutieren - jeden dritten Dienstag im Monat.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-modern-systems-programming-in-leipzig/",
        coordinates: [12.3731, 51.3397],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust Munich",
        description: "Rust is a new exciting programming language with many innovative ideas and features. This group is for all people interesting in Rust in Munich (or outside).",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-munich/",
        coordinates: [11.5820, 48.1351],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust Rhein-Main",
        description: "A group for anyone interested in the Rust programming language. Both beginners and experienced Rust developers are welcome!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-rhein-main/",
        coordinates: [8.6821, 50.1109],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "The Rust Mobility - Hyderabad",
        description: "The Rust Mobility (formerly Rust Language Hyderabad ) is the premiere place in Hyderabad to discuss or learn about the Rust Programming Language. Meet other developers that share your enthusiasm. Everyone is welcome, no prior experience with Rust is required! ",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-hyderabad/",
        coordinates: [78.4867, 17.3850],
        country: "India",
        continent: "Asia"
    },
    {
        name: "Rust Chennai",
        description: "Rust is a systems programming language that provides safety and speed out of the box. If you're interested in getting into it, or you're already doing cool stuff with it, or you got into it and somehow lost it, or you hate it, be anything - let's meet up and talk about it once every month!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/mad-rs/",
        coordinates: [80.2707, 13.0827],
        country: "India",
        continent: "Asia"
    },
    {
        name: "Rustaceans Kenya",
        description: "We are the Rust Programming Language community based in Kenya. We aim to increase adoption of Rust programming language through project collaboration and hosting virtual and physical meetups.",
        image: "https://via.placeholder.com/150",
        link: "https://github.com/orgs/RustaceansKenya/discussions",
        coordinates: [36.8219, -1.2864],
        country: "Kenya",
        continent: "Africa"
    },
    {
        name: "Vilnius Rust and Go",
        description: "We are a team that shares our programming knowledge. Come to our events where we discuss the most relevant and useful topics. See schedules and register. We are happy to share our experience with you. Let's discover the secrets and creative ideas of Rust And Go together!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/vilnius-rust-go-meetup-group/",
        coordinates: [25.2797, 54.6872],
        country: "Lithuania",
        continent: "Europe"
    },
    {
        name: "Rust MX",
        description: "Un grupo para programadores(as) en México que quieran intercambiar conocimientos sobre el lenguaje de programación de propósito general Rust.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-mx/",
        coordinates: [-103.3496, 20.6597],
        country: "Mexico",
        continent: "North America"
    },
    {
        name: "Xalapa Rust",
        description: "Grupo de usuarios de #rust-lang en Xalapa, Veracruz. México.",
        image: "https://via.placeholder.com/150",
        link: "https://xalaparust.github.io/",
        coordinates: [-96.9136, 19.5438],
        country: "Mexico",
        continent: "North America"
    },
    {
        name: "RustNL",
        description: "We organize talks and workshops about Rust, the programming language that empowers everyone to build reliable and efficient software.  Rust Nederland organizes meetups all around NL, hence the name of the group.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-amsterdam/",
        coordinates: [4.9041, 52.3676],
        country: "Netherlands",
        continent: "Europe"
    },
    {
        name: "RustSchool Rotterdam",
        description: "Join us and learn Rust at RustSchool Rotterdam. RustSchool is an open source project run by volunteers with two goals: to create high quality programming curriculum and to host community learning events.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rustschool-rotterdam/",
        coordinates: [4.4792, 51.9225],
        country: "Netherlands",
        continent: "Europe"
    },
    {
        name: "Wellington Rust Meetup",
        description: "This meetup exists to support the local Rust community. We're interested in Rust and its goals of empowering everyone to build safe, reliable software.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/wellington-rust-meetup/",
        coordinates: [174.7762, -41.2865],
        country: "New Zealand",
        continent: "Oceania"
    },
    {
        name: "Rust AKL",
        description: "For avid Rust devs, newcomers and generally those interested in learning more about Rust and beyond!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-akl/",
        coordinates: [174.7633, -36.8485],
        country: "New Zealand",
        continent: "Oceania"
    },
    {
        name: "Rust Oslo",
        description: "We're a group of folks interested in the Rust programming language! Developers of all skill levels are welcome, whether you are a Rust expert or have yet to write your first line of Rust code.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-oslo/",
        coordinates: [10.7522, 59.9139],
        country: "Norway",
        continent: "Europe"
    },
    {
        name: "Rust Warsaw",
        description: "After a break, we’re reuniting with a fresh, new format supported by vlayer. We meet IRL in Warsaw to dive into Rust, share experiences, and connect with great people.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-warsaw/",
        coordinates: [21.0122, 52.2297],
        country: "Poland",
        continent: "Europe"
    },
    {
        name: "Rust in Moscow",
        description: "Rust Moscow сообщество для тех, кто интересуется Rust и backend разработкой",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-%D0%B2-%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5/",
        coordinates: [37.6173, 55.7558],
        country: "Russia",
        continent: "Europe"
    },
    {
        name: "Rust SPB",
        description: "Раст митапы в Санкт-Петербурге.",
        image: "https://via.placeholder.com/150",
        link: "https://t.me/ruRust_spb.",
        coordinates: [30.3351, 59.9343],
        country: "Russia",
        continent: "Europe"
    },
    {
        name: "Belgrade Rust Meetup",
        description: "Join us in showing our love for Rust and it's first cousin, beer. We will get together and talk about learning and using Rust. From newbies who are interested in learning to experts who want to share their knowledge, the only prerequisite for joining is that you are interested in Rust.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/belgrade-rust-meetup-group/",
        coordinates: [20.4573, 44.7872],
        country: "Serbia",
        continent: "Europe"
    },
    {
        name: "Rust Singapore",
        description: "Are you looking to take your programming skills to the next level? Would you like to learn the Rust programming language, which is currently the most admired language according to Stackoverflow? Join our Rust Singapore programming meetup and connect with like-minded individuals who share your passion for coding!",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-singapore/",
        coordinates: [103.8198, 1.3521],
        country: "Singapore",
        continent: "Asia"
    },
    {
        name: "MadRust",
        description: "Rust community in Madrid.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/MadRust/",
        coordinates: [-3.7038, 40.4168],
        country: "Spain",
        continent: "Europe"
    },
    {
        name: "BcnRust",
        description: "Si te interesa Rust, sientes curiosidad por este lenguaje y/o quieres compartir tu conocimiento con otros Rustaceans de la ciudad, éste es tu grupo.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/bcnrust/",
        coordinates: [2.1734, 41.3851],
        country: "Spain",
        continent: "Europe"
    },
    {
        name: "Rust Seoul",
        description: "Rust is a systems programming language that runs blazingly fast, prevents almost all crashes*, and eliminates data races. We are studying about Rust at Seoul.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-seoul/",
        coordinates: [126.9780, 37.5665],
        country: "South Korea",
        continent: "Asia"
    },
    {
        name: "Stockholm Rust",
        description: "Hi! We organize Stockholm-area events for enthusiasts of the Rust programming language,",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/stockholm-rust/",
        coordinates: [18.0686, 59.3293],
        country: "Sweden",
        continent: "Europe"
    },
    {
        name: "Rust Sthlm",
        description: "Hi! We organize Stockholm-area events for enthusiasts of the Rust programming language.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/ruststhlm/",
        coordinates: [18.0690, 59.4393],
        country: "Sweden",
        continent: "Europe"
    },
    {
        name: "Rust Zürisee",
        description: "A group for Rustaceans around Lake Zürich interested in discussing the emerging programming language Rust.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-zurich/",
        coordinates: [8.5417, 47.3769],
        country: "Switzerland",
        continent: "Europe"
    },
    {
        name: "Rust Taiwan",
        description: "Taiwan Rust Community",
        image: "https://via.placeholder.com/150",
        link: "https://github.com/rust-tw",
        coordinates: [121.5654, 25.0330],
        country: "Taiwan",
        continent: "Asia"
    },
    {
        name: "Rust Belfast Meetup",
        description: "Talks and workshops on the rust programming language.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-belfast-meetup/",
        coordinates: [-5.9301, 54.5973],
        country: "United Kingdom",
        continent: "Europe"
    },
    {
        name: "Rust London User Group",
        description: "Rust London is the perfect place to immerse yourself in the Rust ecosystem and connect with a diverse tech community in London.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-london-user-group/",
        coordinates: [-0.1276, 51.5074],
        country: "United Kingdom",
        continent: "Europe"
    },
    {
        name: "Rust North",
        description: "Rustaceans in Manchester.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-North/",
        coordinates: [-2.2426, 53.4808],
        country: "United Kingdom",
        continent: "Europe"
    },
    {
        name: "Cambridge Rust",
        description: "Rust community in Cambridge.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Cambridge-Rust/",
        coordinates: [0.1218, 52.2053],
        country: "United Kingdom",
        continent: "Europe"
    },
    {
        name: "Rust Meetup Uruguay",
        description: "Rustaceans in Montevideo.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Meetup-Uruguay/",
        coordinates: [-56.1645, -34.9011],
        country: "Uruguay",
        continent: "South America"
    },
    {
        name: "Desert Rust",
        description: "Rust community in Phoenix, AZ.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Desert-Rust/",
        coordinates: [-112.0740, 33.4484],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Bay Area",
        description: "Rustaceans in San Francisco, CA.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Bay-Area/",
        coordinates: [-122.4194, 37.7749],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Los Angeles",
        description: "Rust community in Los Angeles, CA.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Los-Angeles/",
        coordinates: [-118.2437, 34.0522],
        country: "USA",
        continent: "North America"
    },
    {
        name: "San Diego Rust",
        description: "Rustaceans in San Diego, CA.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/San-Diego-Rust/",
        coordinates: [-117.1611, 32.7157],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Boulder/Denver",
        description: "Rust community in Boulder/Denver, CO.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Boulder-Denver/",
        coordinates: [-104.9903, 39.7392],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust DC",
        description: "Rustaceans in Washington, DC.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-DC/",
        coordinates: [-77.0369, 38.9072],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Tampa",
        description: "Rust community in Tampa, FL.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Tampa/",
        coordinates: [-82.4572, 27.9506],
        country: "USA",
        continent: "North America"
    },
    {
        name: "South Florida Rust",
        description: "Rustaceans in Fort Lauderdale.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/South-Florida-Rust/",
        coordinates: [-80.1373, 26.1224],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Atlanta",
        description: "Rust community in Atlanta.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rust-atl/",
        coordinates: [-84.3880, 33.7490],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Chicago Rust Meetup",
        description: "Rust enthusiasts in Chicago.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Chicago-Rust-Meetup/",
        coordinates: [-87.6298, 41.8781],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Indy Rust",
        description: "Rustaceans in Indianapolis.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Indy-Rust/",
        coordinates: [-86.1581, 39.7684],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Louisville Rust Meetup",
        description: "Rust community in Louisville.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Louisville-Rust-Meetup/",
        coordinates: [-85.7585, 38.2527],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Boston",
        description: "Rustaceans in Boston.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Boston/",
        coordinates: [-71.0589, 42.3601],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Detroit",
        description: "Rustaceans in Detroit.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Detroit/",
        coordinates: [-83.0458, 42.3314],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Twin Cities",
        description: "Rust community in Minneapolis.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Twin-Cities/",
        coordinates: [-93.2650, 44.9778],
        country: "USA",
        continent: "North America"
    },
    {
        name: "DevVegas the Server-Side with Rust",
        description: "Rust enthusiasts in Las Vegas.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/DevVegas-the-Server-Side-with-Rust/",
        coordinates: [-115.1398, 36.1699],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust NYC",
        description: "New York City's Rust community.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-NYC/",
        coordinates: [-74.0060, 40.7128],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Triangle Rustaceans",
        description: "Rust users in Durham.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Triangle-Rustaceans/",
        coordinates: [-78.8986, 35.9940],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Columbus Rust Society",
        description: "Rust community in Columbus.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Columbus-Rust-Society/",
        coordinates: [-82.9988, 39.9612],
        country: "USA",
        continent: "North America"
    },
    {
        name: "PDXRust",
        description: "Rustaceans in Portland.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/PDXRust/",
        coordinates: [-122.6765, 45.5231],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Pittsburgh Rust Coffee",
        description: "Rust enthusiasts in Pittsburgh.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Pittsburgh-Rust-Coffee/",
        coordinates: [-79.9959, 40.4406],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Dallas Rust",
        description: "Rustaceans in Dallas.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Dallas-Rust/",
        coordinates: [-96.7970, 32.7767],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust India",
        description: "We are Rust enthusiasts based out of Bangalore.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/rustindia/",
        coordinates: [77.5946, 12.9716],
        country: "India",
        continent: "Asia"
    },
    {
        name: "Rust Göteborg",
        description: "Rust community in Göteborg.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Göteborg/",
        coordinates: [11.9746, 57.7089],
        country: "Sweden",
        continent: "Europe"
    },
    {
        name: "Seattle Rust User Group",
        description: "Rust community in Seattle.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Seattle-Rust-User-Group/",
        coordinates: [-122.3321, 47.6062],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust and C++ Cardiff",
        description: "Rust community in Cardiff.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-and-C++-Cardiff/",
        coordinates: [-3.1791, 51.4816],
        country: "United Kingdom",
        continent: "Europe"
    },
    {
        name: "Rust Aarhus",
        description: "Rust community in Aarhus.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Aarhus/",
        coordinates: [10.2039, 56.1629],
        country: "Denmark",
        continent: "Europe"
    },
    {
        name: "Rust TLV",
        description: "Rust community in Tel Aviv-Yafo.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-TLV/",
        coordinates: [34.7818, 32.0853],
        country: "Israel",
        continent: "Asia"
    },
    {
        name: "Dallas Rust User Meetup",
        description: "Rust community in Dallas.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Dallas-Rust-User-Meetup/",
        coordinates: [-96.7970, 32.7767],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Medellin",
        description: "Rust community in Medellin.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Medellin/",
        coordinates: [-75.5636, 6.2518],
        country: "Colombia",
        continent: "South America"
    },
    {
        name: "Rust Nigeria",
        description: "Rust community in Lagos.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Nigeria/",
        coordinates: [3.3792, 6.5244],
        country: "Nigeria",
        continent: "Africa"
    },
    {
        name: "Rust Colombia",
        description: "Rust community in Medellín.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Colombia/",
        coordinates: [-75.5636, 6.2518],
        country: "Colombia",
        continent: "South America"
    },
    {
        name: "Rust Moscow",
        description: "Rust community in Moscow.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Moscow/",
        coordinates: [37.6173, 55.7558],
        country: "Russia",
        continent: "Europe"
    },
    {
        name: "Boston Rust Meetup",
        description: "Rust community in Boston.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Boston-Rust-Meetup/",
        coordinates: [-71.0589, 42.3601],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Charlottesville Rust Meetup",
        description: "Rust community in Charlottesville.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Charlottesville-Rust-Meetup/",
        coordinates: [-78.4767, 38.0293],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Perth Meetup Group",
        description: "Rust community in Perth.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Perth-Meetup-Group/",
        coordinates: [115.8575, -31.9505],
        country: "Australia",
        continent: "Oceania"
    },
    {
        name: "Rust Nederland",
        description: "Rust community in Netherlands.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Nederland/",
        coordinates: [5.2913, 52.1326],
        country: "Netherlands",
        continent: "Europe"
    },
    {
        name: "Dutch Rust Meetup",
        description: "Rust community in Enschede.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Dutch-Rust-Meetup/",
        coordinates: [6.8958, 52.2215],
        country: "Netherlands",
        continent: "Europe"
    },
    {
        name: "Belgium Rust user group",
        description: "Rust community in Brussels.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Belgium-Rust-user-group/",
        coordinates: [4.3517, 50.8503],
        country: "Belgium",
        continent: "Europe"
    },
    {
        name: "Rust Wroclaw",
        description: "Rust community in Wroclaw.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Wroclaw/",
        coordinates: [17.0385, 51.1079],
        country: "Poland",
        continent: "Europe"
    },
    {
        name: "Rust Pune",
        description: "Rust community in Pune.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Pune/",
        coordinates: [73.8567, 18.5204],
        country: "India",
        continent: "Asia"
    },
    {
        name: "Rust Wellington",
        description: "Rust community in Wellington.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Wellington/",
        coordinates: [174.7762, -41.2865],
        country: "New Zealand",
        continent: "Oceania"
    },
    {
        name: "Tokyo Rust Meetup",
        description: "Rust community in Tokyo.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Tokyo-Rust-Meetup/",
        coordinates: [139.6917, 35.6895],
        country: "Japan",
        continent: "Asia"
    },
    {
        name: "Buffalo Rust Meetup",
        description: "Rust community in Buffalo.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Buffalo-Rust-Meetup/",
        coordinates: [-78.8784, 42.8864],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Czech Republic",
        description: "Rust community in Prague.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Czech-Republic/",
        coordinates: [14.4378, 50.0755],
        country: "Czech Republic",
        continent: "Europe"
    },
    {
        name: "Johannesburg Rust Meetup",
        description: "Rust community in Johannesburg.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Johannesburg-Rust-Meetup/",
        coordinates: [28.0473, -26.2041],
        country: "South Africa",
        continent: "Africa"
    },
    {
        name: "Rust ATX",
        description: "Rust community in Austin.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-ATX/",
        coordinates: [-97.7431, 30.2672],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Indonesia",
        description: "Rust community in Jakarta.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Indonesia/",
        coordinates: [106.8456, -6.2088],
        country: "Indonesia",
        continent: "Asia"
    },
    {
        name: "Rust Basel",
        description: "Rust community in Basel.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Basel/",
        coordinates: [7.5886, 47.5596],
        country: "Switzerland",
        continent: "Europe"
    },
    {
        name: "RustSchool Rotterdam",
        description: "Rust community in Rotterdam.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/RustSchool-Rotterdam/",
        coordinates: [4.4792, 51.9225],
        country: "Netherlands",
        continent: "Europe"
    },
    {
        name: "Rust Delhi",
        description: "Rust community in Delhi.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Delhi/",
        coordinates: [77.209, 28.6139],
        country: "India",
        continent: "Asia"
    },
    {
        name: "Rust Tbilisi",
        description: "Rust community in Tbilisi.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Tbilisi/",
        coordinates: [44.8271, 41.7151],
        country: "Georgia",
        continent: "Europe"
    },
    {
        name: "Boulder Rust Meetup",
        description: "Rust community in Boulder.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Boulder-Rust-Meetup/",
        coordinates: [-105.2705, 40.015],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Bratislava Rust Meetup Group",
        description: "Rust community in Bratislava.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Bratislava-Rust-Meetup-Group/",
        coordinates: [17.1077, 48.1486],
        country: "Slovakia",
        continent: "Europe"
    },
    {
        name: "Cambridge Rust meetup",
        description: "Rust community in Cambridge.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Cambridge-Rust-meetup/",
        coordinates: [0.1218, 52.2053],
        country: "United Kingdom",
        continent: "Europe"
    },
    {
        name: "Canberra Rust User Group",
        description: "Rust community in Canberra.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Canberra-Rust-User-Group/",
        coordinates: [149.1300, -35.2809],
        country: "Australia",
        continent: "Oceania"
    },
    {
        name: "Copenhagen Rust Community",
        description: "Rust community in Copenhagen.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Copenhagen-Rust-Community/",
        coordinates: [12.5683, 55.6761],
        country: "Denmark",
        continent: "Europe"
    },
    {
        name: "Detroit Rust",
        description: "Rust community in Detroit.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Detroit-Rust/",
        coordinates: [-83.0458, 42.3314],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Montpellier Rust Meetup",
        description: "Rust community in Montpellier.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Montpellier-Rust-Meetup/",
        coordinates: [3.8767, 43.6117],
        country: "France",
        continent: "Europe"
    },
    {
        name: "Orange County Rust",
        description: "Rust community in Irvine.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Orange-County-Rust/",
        coordinates: [-117.8265, 33.6846],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Argentina",
        description: "Rust community in Buenos Aires.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Argentina/",
        coordinates: [-58.3816, -34.6037],
        country: "Argentina",
        continent: "South America"
    },
    {
        name: "Rust Circle Kampala",
        description: "Rust community in Online.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Circle-Kampala/",
        coordinates: [32.5816, 0.3152],
        country: "Uganda",
        continent: "Africa"
    },
    {
        name: "Rust Cologne",
        description: "Rust community in Köln.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Cologne/",
        coordinates: [6.9603, 50.9375],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust Denver",
        description: "Rust community in Denver.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Denver/",
        coordinates: [-104.9903, 39.7392],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Rust Dublin",
        description: "Rust community in Dublin.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Dublin/",
        coordinates: [-6.2603, 53.3498],
        country: "Ireland",
        continent: "Europe"
    },
    {
        name: "Rust Gdansk",
        description: "Rust community in Gdansk.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Gdansk/",
        coordinates: [18.6466, 54.352],
        country: "Poland",
        continent: "Europe"
    },
    {
        name: "Rust Hack & Learn Karlsruhe",
        description: "Rust community in Karlsruhe.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Hack-and-Learn-Karlsruhe/",
        coordinates: [8.4037, 49.0069],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "Rust Lille",
        description: "Rust community in Lille.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Lille/",
        coordinates: [3.0573, 50.6292],
        country: "France",
        continent: "Europe"
    },
    {
        name: "Rust Montréal",
        description: "Rust community in Montréal.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Montréal/",
        coordinates: [-73.5673, 45.5017],
        country: "Canada",
        continent: "North America"
    },
    {
        name: "Rust Trondheim",
        description: "Rust community in Trondheim.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Trondheim/",
        coordinates: [10.3951, 63.4305],
        country: "Norway",
        continent: "Europe"
    },
    {
        name: "Rust-Saar",
        description: "Rust community in Saarbrücken.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Rust-Saar/",
        coordinates: [6.9969, 49.2322],
        country: "Germany",
        continent: "Europe"
    },
    {
        name: "STL Rust",
        description: "Rust community in Saint Louis.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/STL-Rust/",
        coordinates: [-90.1994, 38.6273],
        country: "USA",
        continent: "North America"
    },
    {
        name: "San Francisco Rust Study Group",
        description: "Rust community in San Francisco.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/San-Francisco-Rust-Study-Group/",
        coordinates: [-122.4194, 37.7749],
        country: "USA",
        continent: "North America"
    },
    {
        name: "Utah Rust",
        description: "Rust community in Lehi.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/Utah-Rust/",
        coordinates: [-111.8497, 40.3916],
        country: "USA",
        continent: "North America"
    },
    {
        name: "impl Zagreb for Rust",
        description: "Rust je programski jezik novije generacije koji nudi alate za razvoj softvera visokih performansi uz određene garancije oko sigurnosti podataka u memoriji. Meetup je zamišljen kao redovno druženje Rust programera u Zagrebu gdje ćemo zajedno istraživati jezik na svim razinama.",
        image: "https://via.placeholder.com/150",
        link: "https://www.meetup.com/zagreb-rust-meetup/",
        coordinates: [15.9819, 45.815],
        country: "Croatia",
        continent: "Europe"
    },
    {
    name: "Rust Tashkent",
    description: "Rust community in Tashkent.",
    image: "https://via.placeholder.com/150",
    link: "https://www.meetup.com/Rust-Tashkent/",
    coordinates: [69.2401, 41.2995],
    country: "Uzbekistan",
    continent: "Asia"
}          
];


// Initialize the MapLibre map
const map = new maplibregl.Map({
    container: 'map', // The ID of the container where the map will be displayed
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: [0, 20],
    zoom: 2, // Initial zoom level
});

const bounds = new maplibregl.LngLatBounds();

const ferrisIconUrl = 'ferris-crab.png';  // Path to your local image

communities.forEach(community => {
    const [lng, lat] = community.coordinates;

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        console.error(`Skipping ${community.name} due to invalid coordinates: [${lng}, ${lat}]`);
        return;
    }

    const marker = new maplibregl.Marker({
        element: createMarkerElement(ferrisIconUrl),
    })
    .setLngLat([lng, lat]) 
    .addTo(map);

    // Add click event to show details in sidebar when clicking on a marker
    marker.getElement().addEventListener('click', function() {
        const communityItem = document.querySelector(`[data-name="${community.name}"]`);
        updateSidebar(community, communityItem);
    });

    bounds.extend([lng, lat]);

    // Add community to sidebar
    addCommunityToSidebar(community);
});

map.fitBounds(bounds, { padding: 50 });

function createMarkerElement(iconUrl) {
    const element = document.createElement('div');
    element.className = 'marker';
    const img = document.createElement('img');
    img.src = iconUrl;
    img.alt = "Ferris Crab Icon";
    img.style.width = '20px';
    img.style.height = '16px';
    img.style.cursor = 'pointer'; 
    element.appendChild(img);
    return element;
}

// Function to update the sidebar with community details
function updateSidebar(community, communityItem = null) {
    document.querySelectorAll(".community-details").forEach(el => el.remove());

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("community-details");

    detailsDiv.innerHTML = `
        <img src="${community.image}" alt="${community.name}" class="community-img">
        <p class="community-name">${community.name}</p>
        <p class="community-description">${community.description}</p>
        <a class="community-link" href="${community.link}" target="_blank">Visit Website</a>
    `;

    if (communityItem) {
        communityItem.after(detailsDiv);
    } else {
        document.getElementById("community-list").appendChild(detailsDiv);
    }
}

function addCommunityToSidebar(community) {
    const sidebar = document.getElementById("community-list");

    // Check if the continent section already exists
    let continentSection = document.querySelector(`[data-continent="${community.continent}"]`);

    if (!continentSection) {
        continentSection = document.createElement("div");
        continentSection.classList.add("continent-section");
        continentSection.setAttribute("data-continent", community.continent);
        continentSection.innerHTML = `<h3 class="continent-title">${community.continent}</h3>`;
        sidebar.appendChild(continentSection);
    }

    // Create the community item
    const communityItem = document.createElement("p");
    communityItem.classList.add("community-item");
    communityItem.textContent = community.name;
    communityItem.setAttribute("data-name", community.name);

    communityItem.addEventListener("click", function() {
        updateSidebar(community, communityItem);
    });

    continentSection.appendChild(communityItem);
}
 