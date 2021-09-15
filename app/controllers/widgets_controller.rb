class WidgetsController < ApplicationController

    def create
        #should we have a widget controller? Probably. This has little to do with a project! Plus, we'll need to had more widget crud
        project_id = params[:project_id]
        widget = params[:widget]
        widget_type = widget.keys[0]
        case widget_type
        when "TextBoxWidget"
            widgetable = TextBoxWidget.create(text: params[:widget][widget_type]['text'])
            project_widget = ProjectWidget.create(project_id: params[:project_id], widgetable_id: widgetable.id, widgetable_type: "TextBoxWidget")
        when "RandomImageWidget"
            widgetable = RandomImageWidget.create(image_url: params[:widget][widget_type]['image_url'])
            project_widget = ProjectWidget.create(project_id: params[:project_id], widgetable_id: widgetable.id, widgetable_type: "RandomImageWidget")
        end
        render json: widgetable, status: :created
    end
end
