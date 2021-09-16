class RandomImageWidgetsController < ApplicationController

    def update
        widget = RandomImageWidget.find_by(id: params[:id])
        widget.update random_image_widget_params
        render json: widget
    end


private 
    def random_image_widget_params
        params.permit(:image_url)
    end
end
