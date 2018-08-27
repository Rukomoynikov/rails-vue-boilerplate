class SuppliersController < ApplicationController
  def index
    uri = URI('https://tradeinspect.ru/organization/suppliers.json')
    data = Net::HTTP.get_response(uri).body.force_encoding("UTF-8")

    render json: data
  end

  def show
    uri = URI('https://tradeinspect.ru/organization/suppliers.json')
    data = Net::HTTP.get_response(uri).body.force_encoding("UTF-8")

    render json: data
  end

  def apps
    uri = URI('https://tradeinspect.ru/organization/suppliers/2/lot_apps.json/?start=25&count=50')
    data = Net::HTTP.get_response(uri).body.force_encoding("UTF-8")

    render json: data
  end
end
