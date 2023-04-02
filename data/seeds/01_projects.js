/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const defaultProjects = [
    {
      project_name: "React Ekran Tasarlama",
      project_description:
        "React kütüphanesi kullanılarak ve bootstrap css kütüphanesini dahil edip form tasarlama",
    },
    {
      project_name: "Mobil Uygulama Yapma",
      project_description: "Flutter kullanarak mobil uygulama yapma",
    },
  ];
  const defaultResources = [
    {
      resource_name: "Github",
      resource_description: "Github Documentation page",
    },
    {
      resource_name: "Flutter",
      resource_description: "Flutter official page",
    },
  ];
  const defaultTasks = [
    {
      task_description: "react form component oluştur",
      task_notes: "react bootstrap indir, form ekranını tasarla",
      project_id: 1,
    },
    {
      task_description: "react form için validasyon yap",
      task_notes:
        "forma girilen değerlerin react-validation kullanarak doğrula",
      project_id: 1,
    },
    {
      task_description: "flutter arayüzü oluştur",
      task_notes: "flutter componentlerinden grid ve card componentini kullan",
      project_id: 2,
    },
  ];
  const defaultProjects_Resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
  ];

  await knex("projects").insert(defaultProjects);
  await knex("resources").insert(defaultResources);
  await knex("tasks").insert(defaultTasks);
  await knex("project_resources").insert(defaultProjects_Resources);
};
