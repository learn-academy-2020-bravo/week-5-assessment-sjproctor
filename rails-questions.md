# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb
library - url path
:id - params
book - controller
show - method

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

create migration
add_column :table :table_id :integer
belongs_to/has_many




4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?


rails g model Person shirt:string pants:string shoes:string


5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

Model - singular, Capital
Table - plural, snake_case
