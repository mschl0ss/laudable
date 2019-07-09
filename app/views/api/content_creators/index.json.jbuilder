json.key_format! camelize: :lower


@content_creators.each do |cc|
    json.set! cc.id do
        json.partial! 'api/content_creators/content_creator', cc: cc

        json.authored_books cc.authored_books do |ab|
            json.extract! ab, :id
        end

        json.narrated_books cc.narrated_books do |nb|
            json.extract! nb, :id
        end

    end
end

       