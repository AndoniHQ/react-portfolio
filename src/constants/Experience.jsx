import dune from '../assets/logos/dune.png'
import t2o from '../assets/logos/t2o.png'
import gls from '../assets/logos/gls.png'

const experiences = [
    {
        title: "Helpdesk",
        company_name: "Dune Technology",
        icon: dune,
        iconBg: "#ffffff",
        date: "2019 - 2019",
        points: [
            "Resolving incidents announced via OTRS.",
            "Configuring and maintaining Linux and Windows servers.",
            "Managing users, emails, and Active Directory.",
            "Utilizing vCenter and Host ESXi for server virtualization.",
            "Administering networks, including VPN connections and firewalls, to ensure secure and efficient system functionality."
        ],
    },
    {
        title: "SysAdmin",
        company_name: "T2Ó",
        icon: t2o,
        iconBg: "#4b86fe",
        date: "2019 - 2022",
        points: [
            "Incident resolution, hardware setup, and user management.",
            "Active Directory administration and maintenance of Linux and Windows systems.",
            "Managing VPN connections, users, and emails in Office 365 and Google Suite.",
            "Utilizing virtualization platforms like VMware.",
            "Implementing Kaspersky for system security."
        ],
    },
    {
        title: "Devops Junior",
        company_name: "T2Ó",
        icon: t2o,
        iconBg: "#4b86fe",
        date: "2022 - 2023",
        points: [
            "Utilizing tools like Bitbucket, JIRA, and GIT for version control and project management.",
            "Practicing Scrum concepts, including sprint planning, daily stand-ups, retrospectives, and incremental project delivery.",
            "Managing AWS and Google Cloud Platform cloud services.",
            "Configuring continuous integration pipelines using Jenkins and Groovy.",
            "Administering Linux servers, primarily Ubuntu, and automating tasks with Python and QA.",
            "Working with containers using Docker and Kubernetes for streamlined application deployment and management."
        ],
    },
    {
        title: "Devops Junior",
        company_name: "GLS",
        icon: gls,
        iconBg: "#ffffff",
        date: "2023 - Present",
        points: [
            "Administration of Linux and Windows servers.",
            "Application containerization with Docker for both platforms.",
            "Implementation of AWS services.",
            "Agile infrastructure management using Terraform.",
            "Effective collaboration on projects using GitHub."
        ],
    },
];

export {experiences};