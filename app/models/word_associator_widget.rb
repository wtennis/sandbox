class WordAssociatorWidget < ApplicationRecord
    has_many :project_widgets, as: :widgetable
end