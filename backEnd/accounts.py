import json

with open("C:/Users/William/Documents/GitHub/QHacks-2023/backEnd/USER DATA OUT.json") as o:
    user_data_out = json.load(o)

# Define variables for food and entertainment budget
food_budget = 500
entertainment_budget = 300

# Create a function to calculate the total budget
def calculate_budget():
    total_budget = food_budget + entertainment_budget
    return total_budget

# Create a function to input expenses and update the budget
def update_budget(category, expense):
    if category == "food":
        food_budget -= expense
    elif category == "entertainment":
        entertainment_budget -= expense
    else:
        print("Invalid category")

# Create a function to check for low balance and send notifications
def check_budget():
    if food_budget <= 100 or entertainment_budget <= 100:
        send_notification("Low balance alert. Please check your budget.")



# Main function
def main():
    total_budget = calculate_budget()
    print("Total budget:", total_budget)
    update_budget("food", 50)
    update_budget("entertainment", 100)
    check_budget()
    print("Food budget:", food_budget)
    print("Entertainment budget:", entertainment_budget)

if __name__ == "__main__":
    main()
    from tkinter import *

root = Tk()
root.title("Budget Tracker")

# Create labels for food and entertainment budget
food_label = Label(root, text="Food Budget:")
food_label.grid(row=0, column=0)
entertainment_label = Label(root, text="Entertainment Budget:")
entertainment_label.grid(row=1, column=0)

# Create entry fields for user input
food_entry = Entry(root)
food_entry.grid(row=0, column=1)
entertainment_entry = Entry(root)
entertainment_entry.grid(row=1, column=1)

# Create a function to update the budget
def update_budget():
    global food_budget
    global entertainment_budget
    food_budget = int(food_entry.get())
    entertainment_budget = int(entertainment_entry.get())
    total_budget = food_budget + entertainment_budget
    total_budget_label.config(text="Total Budget: " + str(total_budget))

# Create a button to submit the budget
submit_button = Button(root, text="Submit", command=update_budget)
submit_button.grid(row=2, column=0, columnspan=2)

# Create a label to display the total budget
total_budget_label = Label(root, text="Total Budget:")
total_budget_label.grid(row=3, column=0, columnspan=2)

root.mainloop()

print(user_data_out)