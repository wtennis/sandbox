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
            widgetable = {"TextBoxWidget" => widgetable}
        when "RandomImageWidget"
            widgetable = RandomImageWidget.create(image_url: params[:widget][widget_type]['image_url'])
            project_widget = ProjectWidget.create(project_id: params[:project_id], widgetable_id: widgetable.id, widgetable_type: "RandomImageWidget")
            widgetable = {"RandomImageWidget" => widgetable}
        when "RhymifyWidget"
            widgetable = RhymifyWidget.create(input_word: "orange")
            project_widget = ProjectWidget.create(project_id: params[:project_id], widgetable_id: widgetable.id, widgetable_type: "RhymifyWidget")
            widgetable = {"RhymifyWidget" => widgetable}
        when "WordAssociatorWidget"
            widgetable = WordAssociatorWidget.create(input_word: "giraffe")
            project_widget = ProjectWidget.create(project_id: params[:project_id], widgetable_id: widgetable.id, widgetable_type: "WordAssociatorWidget")
            widgetable = {"WordAssociatorWidget" => widgetable}
        end
        render json: widgetable, status: :created
    end


    def destroy
        case params[:type]
        when "TextBoxWidget"
            widget = TextBoxWidget.find_by(id: params[:id])
            project_widget = ProjectWidget.where(widgetable_id: params[:id], widgetable_type: "TextBoxWidget")
        when "RandomImageWidget"
            widget = RandomImageWidget.find_by(id: params[:id])
            project_widget = ProjectWidget.where(widgetable_id: params[:id], widgetable_type: "RandomImageWidget")
        when "RhymifyWidget"
            widget = RhymifyWidget.find_by(id: params[:id])
            project_widget = ProjectWidget.where(widgetable_id: params[:id], widgetable_type: "RhymifyWidget")
        when "WordAssociatorWidget"
            widget = WordAssociatorWidget.find_by(id: params[:id])
            project_widget = ProjectWidget.where(widgetable_id: params[:id], widgetable_type: "WordAssociatorWidget")
        end
        project_widget[0].destroy
        widget.destroy
        
        head :no_content
    end

end
