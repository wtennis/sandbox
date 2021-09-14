class ProjectsController < ApplicationController

    def index
        projects = Project.all.where(user_id: session[:user_id])
        render json: projects
    end

end
