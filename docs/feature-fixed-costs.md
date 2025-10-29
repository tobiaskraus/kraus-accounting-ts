# feature: fixed costs

Maybe my first feature I want to implement

## Currently in my (old) Spreadsheets tool

rows

- Label (select: Notwendig, Produktiviät, ...)
- Wer (select: Gabriele, Tobias, Common)
- Was (text)
- Von (date | empty)
- Bis (date | empty)
- "Abrechnung (EUR)" (number in €)
- "Abrechnung alle x Monate" (number)
- pro Monat (formula)
- Abrechnung am (text)
- Anmerkung (text)

extra rows "Kosten pro Jahr"

- 2025 (formula to calculate all spent € in this year)
    - `=(Max(0,Days(MIN($E43,date(K$4,12,31)),MAX($D43,date(K$4,1,1))))/30.33)*$H43`
- 2024
- ...
-

first 3 rows

- "select date or leave empty for today"
    - use can enter "2024" and click a button "refresh" which triggers Google Apps script to update the table filter view to select only rows active in this year
    - -> this is annoying and only works if athe filter is active

## Concept

- A list with all fixed costs
- list can be filtered (e.g. only items of person A, only contracts which were active in date 2024-04-15 or 2024)
- **Periods** a fixed-cost entry (like "Netflix" membership) can have 1-n periods. A membership can increase its price over time, but we want to keep the old price infos for historic data. We don't want to duplicate the whole fixed-cost entry and have no reference to each othter. That's why values of a fied-cost entry, which might change, are part of a period, with start and end date (eur_per_month, assignee, ...).
- clicking an item opens details page (e.g. "Netflix")
- detail page has 2 tabs: Data, Statistics
- Data tab:
    - on top form fields like title="Netflix", comment="Account: max@mustermann.de"
    - some fields are computed (readonly) values from its current period (like 10.99€)
    - Periods as accordion. A period can be expanded and it's values can be changed
- Statistics tab:
    - Line chart, how price developed over time
    - (maybe later more statistics)

### Data structure

```
fixed_cost
- label: text
- assignee: (calculated from period)
- title: (calculated from period)
- comment: text
- eur_per_month: (calculated from period)
- periods (Array)
    - eur_per_month (number)
    - billing_notes (like "52€ every year")
    - from_date (date, maybe easer as ISO string)
    - till_date (date, maybe easier as ISO string)
    - comment (text)
    - assignee (select)
```
