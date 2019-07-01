require 'faker'

def countUniques
    count = 0
    begin
        1000.times do 
            count += 1
            Faker::Book.unique.genre
        end
    rescue StandardError
        puts 'count: ' + count.to_s
    end
end

countUniques
