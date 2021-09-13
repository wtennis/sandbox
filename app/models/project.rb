class Project < ApplicationRecord
    belongs_to :user
    has_many :project_widgets
    
    ##Experimentation
    has_many :widgets, through: :project_widgets, source: :widgetable, source_type: 'TextBoxWidget'
    has_many :widgets, through: :project_widgets, source: :widgetable, source_type: 'RandomImageWidget'

end
