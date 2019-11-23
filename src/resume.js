import React from 'react'

// JSX is supported in most places in this template in place of strings
const resume = {
  header: {
    name: 'Jonathan Linford',
    links: [
      {
        href: 'mailto:jonathanlinford@gmail.com?subject=We really want to hire you!',
        icon: 'far fa-envelope',
        text: 'jonathanlinford@gmail.com',
      },
      {
        href: 'https://github.com/jonathanlinford',
        icon: 'fab fa-github',
        text: 'github.com/jonathanlinford',
      },
      {
        href: 'https://linkedin.com/in/jonathanlinford/',
        icon: 'fab fa-linkedin',
        text: 'linkedin.com/in/jonathanlinford',
      },
      {
        href: 'https://twitter.com/JonnyasLinford',
        icon: 'fab fa-twitter',
        text: 'twitter.com/JonnyasLinford',
      },
      {
        href: 'https://stackoverflow.com/users/8464611/jonathan-linford',
        icon: 'fab fa-stack-overflow',
        text: 'stackoverflow.com/users/8464611/jonathan-linford',
      },
      {
        href: 'https://instagram.com/jonnyaslinford',
        icon: 'fab fa-instagram',
        text: 'instagram.com/jonnyaslinford',
      },
    ],
  },
  summary: [
    'Seeking full-time position as a Software Engineer starting January 2020',
    'Graduating December 2019 with a Bachelor\'s in Computer Science',
    '2.5 years of Software experience',
    'Currently Software Engineer at Lockheed Martin in Vineyard, UT',
    'Skills: Object-Oriented Design, Software Design Patterns, Linux/Unix, macOS, Windows, Android/iOS, some React and Angular',
    'Languages: Python (including numpy, pytorch, pandas), Java/Kotlin, \
    C/C++, Swift. Introductory Experience with Elixir, go, haskell, prolog, and matlab.',
  ],
  sections: [
    {
      title: 'Education',
      subsections: [
        {
          title: <a href="https://www.byu.edu/" target="_blank" rel="noopener noreferrer">{'Brigham Young University'}</a>,
          subtitle: 'Senior - Expected Graduation Date: December 2019',
          details: [
            'Bachelors of Science in Computer Science',
            'Current GPA: 3.47',
            'Completed Coursework: Big Data Computer Science Capstone, Deep Learning, Mobile Development (Android & iOS), UI/UX Design',
            'Activities: Management Consulting Club, Association of Computing Machinery, BYU Rocketry Club, BYU Men\'s Chorus'
          ]
        },
        {
          title: <a href="https://www.uvu.edu/" target="_blank" rel="noopener noreferrer">{'Utah Valley University'}</a>,
          subtitle: 'August 2015 - December 2016',
          details: [
            'Persued Bachelors of Science in Computer Science',
            'GPA: 3.78',
            'Completed Coursework: Computer Architecture, Data Structures and Algorithms',
            'Activities: Phi Theta Kappa Honor Society Member, Member of the Society of Collegiate Leadership & Achievement'
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
        {
          title: <a href="https://www.lockheedmartin.com/" target="_blank" rel="noopener noreferrer">{'Lockheed Martin'}</a>,
          subtitle: 'Software Engineer Intern - May 2019 to Current',
          details: [
            'Team designed & implemented an automated testing framework to save costs and man hours over the lifetime of the contract',
            'Learned technologies such as GRPC using protocol buffers and docker within docker swarm on a python codebase and C++',
            'Lead intern project team as scrum master in proposing and implementing a sonar threat detection system: We used a teensy \
            microcontroller to gather audio signal, denoise, apply FFT and output tables and audio to convey hostile or friendly source',
            'Offered full-time position (declined due to inability to relocate), continued internship in UT working on UAVs',
          ]
        },
        {
          title: <a href="https://www.chatbooks.com/" target="_blank" rel="noopener noreferrer">{'Chatbooks'}</a>,
          subtitle: 'Android Engineer - November 2017 to May 2019',
          details: [
            'Managed the Java / Kotlin code base for the Chatbooks Android app with over 620, 000 downloads and a 4.5 - star rating',
            'Implemented AWS S3 photo uploading SDK to resolve long - standing photo corruption error',
            'Involved in the development and release of new UI features using material design to build custom views and layouts',
            'Performed automated and manual testing of the Android and IOS apps responsible for 90% of the company’s revenue',
            'Contributed to the overall testing and design of Node.js UI frontend and AWS C# backend',
          ]
        },
        {
          title: <a href="https://www.digicert.com/" target="_blank" rel="noopener noreferrer">{'DigiCert Inc.'}</a>,
          subtitle: 'Quality Assurance and Marketing Intern - August 2016 to November 2017',
          details: [
            'Contributed to the development, testing, and rollout of customer facing SSL certificate management software',
            'Worked with developers to create and update Zephyr manual software test suites and Selenium automated testing',
            'Managed the strategic planning of the reseller partner accounts totaling in $10 + million in annual revenue',
            'Reviewed applications from 360 + technology companies worldwide and consulted on best reseller practices',
          ]
        },
        {
          title: <a href="https://www.accessdevelopment.com/" target="_blank" rel="noopener noreferrer">{'Access Development Corp.'}</a>,
          subtitle: 'Business Account Specialist - July 2015 to August 2016',
          details: [
            'Developed new system for contract renewal and set all-time record of 311 renewals in 1 month – previous record being 60',
            'Managed membership discount contracts and accounts for over 9, 000 businesses throughout the United States and Canada',
            'Led the merchant relations team in renewal contracts, commissions and hours worked for final 5 months of employment',
            'Involved in revisions of workflow and marketing materials that led to 300 % increase in contract renewals',
          ]
        },
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: <a href="https://www.churchofjesuschrist.org/" target="_blank"
           rel="noopener noreferrer">{'The Church of Jesus Christ of Latter-Day Saints'}</a>,
          subtitle: 'Full-Time Proselyting Missionary - March 2013 to April 2015',
          details: [
            'Managed 100 service volunteers in overseeing logistics, transferring volunteers, and effective teaching & planning',
            'Led 120+ one-on-one 24-hour trainings focusing on personal development, foreign language study and teaching skills',
            'Created and launched 6 organization-wide monthly training programs',
            'Learned to speak, read, and write fluently in Spanish',
          ]
        },
      ]
    }
  ]
}

export default resume