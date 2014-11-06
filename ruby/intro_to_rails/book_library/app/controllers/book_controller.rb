class BookController < ApplicationController

	def index
		@books = Book.all.order(created_at: :desc)
	end

	def new
		book = Book.new
		book.title = params[:title]
		book.author = params[:author]
		book.genre = params[:genre]
		book.pages = params[:pages]

		book.save

		redirect_to "/"
	end

	def edit_form
		@book = Book.find(params[:id])

		render "edit"
	end

	def edit
		book = Book.find(params[:id])

		book.title = params[:title]
		book.author = params[:author]
		book.genre = params[:genre]
		book.pages = params[:pages]

		book.save

		redirect_to "/"
	end

end
