class TextBoxWidget < ApplicationRecord
    has_many :project_widgets, as: :widgetable

    #has_many :projects, :through => :project_widgets, :as => :widgetable

end
