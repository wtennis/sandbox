class TextBoxWidgetsController < ApplicationController

    def update
        text_box_widget = TextBoxWidget.find_by(id: params[:id])
        text_box_widget.update(text_box_widget_params)
        render json: text_box_widget
    end

    private

    def text_box_widget_params
        params.permit(:text)
    end


end
