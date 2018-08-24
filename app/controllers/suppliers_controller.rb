class SuppliersController < ApplicationController
  def index
    uri = URI('https://tradeinspect.ru/organization/suppliers.json')
    data = Net::HTTP.get_response(uri).body.force_encoding("UTF-8")

    render json: data
  end
end
