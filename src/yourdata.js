export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Nathan',
        headerTagline: [//Line 1 For Header
                        "Hey, I'm Nathan.",
                        //Line 2 For Header
                        'Front End Developer ',
                        //Line 3 For Header
                        'and Designer'
        ],
        //Contact Email
        contactEmail:'nathan.tyler.wade@gmail.com',
        // Add Your About Text Here
        abouttext: "Sample About Until I write something interesting.",
        aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:false,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
                id: 1,//DO NOT CHANGE THIS (Please)😅
                title:'Canopy Juice', //Project Title - Add Your Project Title Here
                service:'UI/UX Design and Web Development', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                //Project URL - Add Your Project Url Here
                url:'/canopy',
                isExternal: false,
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Stefan Raymond Copywriting',
                service: 'UI/UX Design and Web Development',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://stefanraymond.com/',
                isExternal: true,
           },
           {
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'EBS',
                service: 'UI/UX Design and Web Development',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: '/ebs',
                isExternal: false,
            },
           { 
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Luggage Relay',
                service: 'UI/UX Design',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: '/luggage-relay',
                isExternal: false,
            }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/papernathan'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/papernathan/'
            }
        ]
    }
