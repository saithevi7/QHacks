class BudgetAccount:
    def __init__(self, food_budget, entertainment_budget):
        import json
        with open("C:/Users/William/Documents/GitHub/QHacks-2023/backEnd/USER DATA OUT.json") as o:
            user_data_out = json.load(o)
        self.balance = 0
        self.food_budget = user_data_out["Outputs"]["1"]
        self.entertainment_budget = user_data_out["Outputs"]["3"]

    def check_balance(self):
        return self.balance

    def track_expense(self, expense_type, amount):
        if expense_type == "food":
            if self.balance - amount < -self.food_budget:
                return "Budget exceeded for food expenses"
            self.balance -= amount
        elif expense_type == "entertainment":
            if self.balance - amount < -self.entertainment_budget:
                return "Budget exceeded for entertainment expenses"
            self.balance -= amount
        else:
            return "Invalid expense type"
my_budget = BudgetAccount(1000, 500)
print(my_budget.check_balance())
print(my_budget.track_expense("food", 200))


