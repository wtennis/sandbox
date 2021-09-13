class ProjectWidget < ApplicationRecord
  belongs_to :project
  belongs_to :widgetable, polymorphic: true
end
