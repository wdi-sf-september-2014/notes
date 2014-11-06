class BookController < ApplicationController

	def index
		@books = Book.all

		render "index"
	end

	def create
		Book.create(title: params[:title], author: params[:author], genre: params[:genre], pages: params[:pages])

		redirect_to "/"
	end

	def show
		@book = Book.find(params[:id])

		render "edit"
	end

	def edit
		book = Book.find(params[:id])

		if params[:delete_button]
			book.destroy

			redirect_to "/"
		else
			book.update(title: params[:title], author: params[:author], genre: params[:genre], pages: params[:pages])

			redirect_to "/"
		end
	end

end
