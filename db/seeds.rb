# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Industry.destroy_all
Company.destroy_all
User.destroy_all

@admin useCreate 

Industry.create!(name: 'Financial')
Industry.create!(name: 'Entertainment')
Industry.create!(name: 'Restaurant' )
Industry.create!(name: 'Beauty')
Industry.create!(name: 'Medical')
Industry.create!(name: 'Education')

puts "#{Industry.count} industries created"

Company.create!(name: 'Bank of America', user: @admin)
Company.create!(name: 'House of Beauty', user: @admin)
Company.create!(name: 'Grady Hospital', user: @admin)
Company.create!(name: 'Morehouse College', user: @admin)
Company.create!(name: 'Houston;s Restaurant', user: @admin)
Company.create!(name: 'Phillips Arena', user: @admin)

puts "#{Company.count} companies created"