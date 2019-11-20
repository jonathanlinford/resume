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
        icon: 'fa fa-github',
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
    'Skills: {comma separated list of skills}'
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
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
        {
          title: <a href="https://www.chatbooks.com/" target="_blank" rel="noopener noreferrer">{'Chatbooks'}</a>,
          subtitle: 'Android Engineer - November 2017 to May 2019',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
        {
          title: <a href="https://www.digicert.com/" target="_blank" rel="noopener noreferrer">{'DigiCert Inc.'}</a>,
          subtitle: 'Quality Assurance Intern - August 2016 to November 2017',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
        {
          title: <a href="https://www.accessdevelopment.com/" target="_blank" rel="noopener noreferrer">{'Access Development Corp.'}</a>,
          subtitle: 'Quality Assurance Intern - July 20201517 to August 2016',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: <a href="{organization homepage}" target="_blank" rel="noopener noreferrer">{'organization name'}</a>,
          subtitle: '{position} - {start date} to {end date}',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
          ]
        },
      ]
    }
  ]
}

export default resume