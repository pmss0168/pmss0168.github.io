const projects = [
  {
    title: 'VanouS E-commerce',
    description:
      'Hệ thống website thương mại điện tử. VanouS xây dựng các chức năng hỗ trợ người dùng mua sắm như thêm giỏ hàng, đặt hàng, thanh toán tiền mặt, ví điện tử, xem đơn hàng, đánh giá sản phẩm theo đơn hàng. Cùng với đó là các chức năng quản lý sản phẩm, đơn hàng và các tùy chỉnh khác phía quản trị.',
    image: 'images/project/vanous_ecommerce.png',
    technologies: ['Spring Boot', 'ReactJS', 'TailwindCSS', 'MySQL', 'Flyway', 'Docker'],
    githubLink: 'https://github.com/pmss0168/NienLuanNganh-Fork',
    demoLink: '#',
  },
  {
    title: 'VanouS Motel',
    description:
      'Website đặt phòng nhà nghỉ. VanouS Motel cung cấp cho người nơi để đặt phòng nhà nghỉ, xem hóa đơn, thay đổi thông tin cá nhân. Quản trị viên có thể quản lý phòng, loại phòng, đơn đặt phòng và thống kê tổng tiền, số đơn đặt.',
    image: 'images/project/vanous_motel.jpeg',
    technologies: ['Java J2EE', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubLink: 'https://github.com/pmss0168/VanousMotel',
    demoLink: '#',
  },
  {
    title: 'VanouS Chat',
    description:
      'Ứng dụng chat cơ bản. VanouS Chat là nơi mà người dùng trao đổi thông tin với nhau, hãy kết bạn và nhắn tin cho nhau. Hệ thống cung cấp cho các chức năng đăng ký, đăng nhập, tìm kiếm, kết bạn, trao đổi tin nhắn tức thời.',
    image: 'images/project/vanous_chat.png',
    technologies: ['NodeJS', 'ExpressJS', 'SocketIO', 'EJS', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/pmss0168/NLCS_ChatApp',
    demoLink: '#',
  },
];

function createProjectHTML(project, index) {
  return `
                <div class="project" style=" ${
                  index % 2 == 0 ? `` : `flex-direction: row-reverse;`
                }">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title} Project">
                    </div>
                    <div class="project-info">
                      <h2 class="project-title">${project.title}</h2>
                      <p class="project-description">${project.description}</p>
                      <div class="project-technologies">
                          ${project.technologies
                            .map((tech) => `<span class="technology">${tech}</span>`)
                            .join('')}
                      </div>
                      <div class="project-links">
                          <a href="${
                            project.githubLink
                          }" class="project-link" target="_blank">View on GitHub</a>
                          <!-- <a href="${project.demoLink}" class="project-link">Live Demo</a> -->
                      </div>
                    </div>
                </div>
            `;
}

document.addEventListener('DOMContentLoaded', function () {
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach((project, index) => {
    projectsContainer.innerHTML += createProjectHTML(project, index);
  });
});
