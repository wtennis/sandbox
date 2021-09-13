class Project < ApplicationRecord
    belongs_to :user
    has_many :project_widgets

   # has_many :widgetables, :through => :project_widgets
   def widgets
    project_widgets.map { |pw| pw.widgetable}
   end
end
