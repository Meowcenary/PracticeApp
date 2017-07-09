class Api::V1::CharactersController < Api::V1::BaseController
  def index
    respond_with Character.all
  end

  def create
    respond_with :api, :v1, Character.create(item_params)
  end

  def destroy
    respond_with :api, :v1, Character.destroy(params[:id])
  end

  def update
    char = Character.find(params["id"])
    char.update_attributes(char_params)
    respond_with char, json: char
  end

  private

  def character_params
    params.require(:character).permit(:id, :name, :char_class, :level, :background, :race, :alignment, :strength,
                                        :dexterity, :constitution, :intelligence, :wisdom, :charisma)
  end
end