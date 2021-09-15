class TextBoxWidget < ApplicationRecord
    has_many :project_widgets, as: :widgetable #dependent: :destroy?

    #has_many :projects, :through => :project_widgets, :as => :widgetable

end
