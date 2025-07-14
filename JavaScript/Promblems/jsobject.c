// V8 representation of JSObject 

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef enum {

  JS_STRING,  
  JS_NUMBER,
  JS_FUNCTION,
  JS_OBJECT,
  JS_ARRAY,
  JS_UNDEFINED,
  JS_BOOLEAN

} JSValueType;

typedef struct JSValue {

    JSValueType type;
    union {
        char* stringValue;
        double numberValue;
        struct JSObject *objectValue;
        struct JSArray *arrayValue;
        void (*functionValue)();
        int booleanValue;
    };

} JSValue;

typedef struct JSProperty {

    char* key;
    JSValue value;

}JSProperty;

typedef struct JSObject {

    JSProperty* properties;
    size_t propertyCount;
    JSObject* prototype;

}JSObject;

typedef struct JSArray {

    size_t length,
    JSProperty* items;
    JSObject* prototype;

}JSArray;

void greet() {
    printf("Hello World\n");
}
void execute(JSObject* object, char* key) {
    for(int i = 0; i < object->propertyCount; ++i){
        if(strcmp(object->properties[i],key) = 0) {
            if(object->properties[i].value.type == JS_STRING) {
                printf("%s\n",object->properties[i].value.stringValue);
            }else if (object->properties[i].value.type == JS_NUMBER) {
                printf("%f\n",object->properties[i].value.numberValue);
            }
        }
    } 
}

int main(){
    JSObject* person = (JSObject*)malloc(sizeof(JSObject));
    JSProperty* properties = (JSProperty) malloc(4 * sizeof(JSProperty));
    
    //name
    properties[0].key = "name";
    properties[0].value.type = JS_STRING;
    properties[0].value.stringValue = "Alice";

    //age
    properties[1].key = "age";
    properties[1].value.type = JS_NUMBER;
    properties[1].value.numberValue = "25";

    //isStudent
    properties[2].key = "isStudent";
    properties[2].value.type = JS_BOOLEAN;
    properties[2].value.booleanValue = 0;

    //greet
    properties[3].key = "greet";
    properties[3].value.type = JS_FUNCTION;
    properties[3].value.functionValue = greet; 
    
    person->properties = properties;
    person->propertyCount = 4;
    // person->prototype
}
