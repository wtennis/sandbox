# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Seeding'

user1 = User.create(username: 'testUser', password: 'test123')
project1 = Project.create(title: "Image Project", user_id: user1.id, description: "This is a cool project")
widget1 = RandomImageWidget.create(image_url: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")
widget2 = TextBoxWidget.create(text: "Brainstorm, brainstorm, blah blah blah")
pw1 = ProjectWidget.create(project_id: project1.id, widgetable_id: widget1.id, widgetable_type: "RandomImageWidget")
pw2 = ProjectWidget.create(project_id: project1.id, widgetable_id: widget2.id, widgetable_type: "TextBoxWidget")

project2 = Project.create(title: "Poetic Poem", user_id: user1.id, description: "artsy fartsy poetry")
widget3 = RandomImageWidget.create(image_url: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")
widget4 = TextBoxWidget.create(text: "Not sure what to put in this poem...")
widget5 = RhymifyWidget.create(input_word: "orange")
pw3 = ProjectWidget.create(project_id: project2.id, widgetable_id: widget3.id, widgetable_type: "RandomImageWidget")
pw4 = ProjectWidget.create(project_id: project2.id, widgetable_id: widget4.id, widgetable_type: "TextBoxWidget")
pw5 = ProjectWidget.create(project_id: project2.id, widgetable_id: widget5.id, widgetable_type: "RhymifyWidget")


puts '✅ Seeding done ✅'

